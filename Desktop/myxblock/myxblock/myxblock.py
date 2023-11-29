# TO-DO: Write a description of what this XBlock is.

import pkg_resources,os
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Integer, Scope, String
from django.template import Context, Template


class MyXBlock(XBlock):
    """
    TO-DO: document what your XBlock does.
    """    
    jupyterlite_url = String(
        display_name="JupyterLite Service URL",
        help="The URL of the JupyterLite service",
        scope=Scope.settings,
        default="http://jupyterlite.local.overhang.io:9500/lab/index.html"
    )
    # default_notebook = file(
    #     display_name="Default Notebook",
    #     # scope=Scope.settings,
    #     help="The default notebook for the JupyterLite service",
    # )
    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")

    def render_template(self, template_path, context):
        template_str = self.resource_string(template_path)
        template = Template(template_str)
        rendered_template = template.render(Context({'context': context}))
        return rendered_template
    
    def student_view(self, context=None):
        jupyterlite_iframe = '<iframe src="{}" width="100%" height="600px" style="border: none;"></iframe>'.format(self.jupyterlite_url)
        html = self.resource_string("static/html/myxblock.html").format(jupyterlite_iframe=jupyterlite_iframe, self=self)
        frag = Fragment(html)
        frag.initialize_js('MyXBlock')
        return frag

    
    def studio_view(self, context=None):
        studio_context = {
            "jupyterlite_url": self.fields["jupyterlite_url"],
            # "default_notebook": self.fields["default_notebook"],
        } 
        studio_context.update(context or {})
        template = self.render_template("static/html/upload.html", studio_context)
        frag = Fragment(template)
        frag.add_javascript(self.resource_string("static/js/src/studio.js"))
        frag.initialize_js('MyXBlock')
        return frag
    
    @XBlock.handler
    def studio_submit(self,request, _suffix):
        """
        Handle form submission in Studio.
        """
        # Get values from the form data
        self.jupyterlite_url = request.params.get("jupyterlite_url", "")
        self.save()
        response = {"result": "success", "errors": []}
        return self.json_response(response)


    @staticmethod
    def workbench_scenarios():
        return [
            ("MyXBlock",
             """<myxblock/>
             """),
            ("Multiple MyXBlock",
             """<vertical_demo>
                <myxblock/>
                <myxblock/>
                <myxblock/>
                </vertical_demo>
             """),
        ]
