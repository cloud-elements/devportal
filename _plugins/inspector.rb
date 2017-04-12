require 'json'

module Jekyll
  class InspectTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
      super
    end

    def render(context)
      output = <<-eos
        \<script type='text/javascript'>
          function LiquidInspector(inspectedValues){
            this.context = inspectedValues\;
          }
          var data = {'environments':#{context.environments.to_json.gsub('"', "\"").gsub( '</', '<\/' )},
            'errors':#{context.errors.to_json.gsub('"', "\"").gsub( '</', '<\/' )},
            'scopes':#{context.scopes.to_json.gsub('"', "\"").gsub( '</', '<\/' )},
            'registers':#{context.registers.to_json.gsub('"', "\"").gsub( '</', '<\/' )} }\;
          console.log(new LiquidInspector(data))\;
        \<\/script\>
      eos
      output
    end
  end
end

Liquid::Template.register_tag('inspect', Jekyll::InspectTag)
