module Jekyll
  module Column
    def column(text)
      text.gsub(%r{<ul>}i, '<div class="row">').gsub(%r{</ul>}i, '</div>').gsub(%r{<li>}i, '<div class="col-md-3">').gsub(%r{</li>}i, '</div>')
    end
  end
end

Liquid::Template.register_filter(Jekyll::Column)
