module ShardGenerator
  class ShardGenerator < Jekyll::Generator
    def generate(site)
      shards = { }

      site.pages.each do |page|
        dir = page.path.split('/')[0...-1].join('/')
        id = dir.gsub('/', '_').gsub('-', '_')

        if shards.key?(id) then
          shards[id].push(page)
        else
          shards[id] = [page]
        end
      end

      site.config['shards'] = shards
    end
  end
end
