module Jekyll
  module Column
    def column(text)
      text.gsub(%r{<ul>}i, '<div id="filter" class="row text-xs-center p-a-lg">').gsub(%r{</ul>}i, '</div>').gsub(%r{<li>}i, '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 element-column">').gsub(%r{</li>}i, '</div>')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Column)
