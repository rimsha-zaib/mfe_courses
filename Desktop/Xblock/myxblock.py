# TO-DO: Write a description of what this XBlock is.

import pkg_resources,os
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.fields import Integer, Scope, String
from django.template import Context, Template
from xblockutils.resources import ResourceLoader
import urllib.parse





class MyXBlock(XBlock):
    """
    TO-DO: document what your XBlock does.
    """    
    jupyterlite_url = String(
        display_name="JupyterLite Service URL",
        help="The URL of the JupyterLite service",
        scope=Scope.content,
        default="https://jupyter.org/try-jupyter/lab/?path=notebooks%2FIntro.ipynb"
    )
    editable_fields = ('jupyterlite_url')
    # default_notebook = file(
    #     display_name="Default Notebook",
    #     # scope=Scope.settings,
    #     help="The default notebook for the JupyterLite service",
    # )
    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        data = pkg_resources.resource_string(__name__, path)
        return data.decode("utf8")
    def get_external_url(self, file_name):
        base_url = self.jupyterlite_url
        encoded_file_name = urllib.parse.quote(file_name)
        external_url = f"{base_url}?fromURL={encoded_file_name}"
        return external_url

    def render_template(self, template_path, context):
        template_str = self.resource_string(template_path)
        template = Template(template_str)
        rendered_template = template.render(Context({'context': context}))
        return rendered_template
    
    
    
    def student_view(self, context=None):
        file_name = "/Users/rimsha.zaib/Library/Application Support/tutor/env/build/openedx/requirements/myxblock/test1.ipynb" 
        external_url = self.get_external_url(file_name)
        jupyterlite_iframe = f'<iframe src="{external_url}" width="100%" height="600px" style="border: none;"></iframe>'
        print(";;;;;;;;;;;;;;;;;;;;jupyterlite_iframe     ---------------------  ;;;;;;;;;;;;;;;;;;;",jupyterlite_iframe)
        html = self.resource_string("static/html/myxblock.html").format(jupyterlite_iframe=jupyterlite_iframe, self=self)
        frag = Fragment(html)
        frag.initialize_js('MyXBlock')
        return frag
    
    # def student_view(self, context=None):
    #     file_name = "https://jupyter.org/try-jupyter/lab?path=Untitled1.ipynb"
    #     url = self.get_external_url(file_name)
    #     #jupyterlite_iframe = '<iframe src="{}" ?fromURL ={} width="100%" height="600px" style="border: none;"></iframe>'.format(self.jupyterlite_url, file_name)
    #     # Create the iframe tag with the constructed URL
    #     jupyterlite_iframe = '<iframe src="{}" width="100%" height="600px" style="border: none;"></iframe>'.format(url)

    #     # Create the HTML fragment
    #     html = self.resource_string("static/html/myxblock.html").format(jupyterlite_iframe=jupyterlite_iframe, self=self)
    #     frag = Fragment(html)
    #     frag.initialize_js('MyXBlock')
    #     return frag
    

    

    
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
    def studio_submit(self, data, suffix=''):
        """
        Handle form submission in Studio.
        """
        # Get values from the form data
        self.jupyterlite_url = data.get("jupyterlite_url")
        # self.default_notebook = request.FILES.get("default_notebook")
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
