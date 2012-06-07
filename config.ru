require "bundler/setup"
require "rack-livereload"

use Rack::LiveReload

# A simple Rack app that serves the site, so we can use POW against it.
# Taken from http://stackoverflow.com/a/3930606
# TODO: consolidate with the version in spec_helper.rb
#
run Proc.new { |env|
  # Root directory of the site
  root = File.dirname(__FILE__)

  # Extract the requested path from the request
  path = Rack::Utils.unescape(env['PATH_INFO'])
  file = "#{root}#{path}".gsub(%r(//+), "/")
  index_file = "#{file}/index.html".gsub(%r(//+), "/")

  if File.exists?(index_file)
    file = index_file
  end

  if File.exists?(file)
    mime = case File.extname(file)
      when /png$/i  then "image/png"
      when /js$/i   then "application/javascript"
      when /css$/i  then "text/css"
      when /html$/i then "text/html"
      when /txt$/i  then "text/plain"
      else "application/octet-stream"
    end
    [200, {'Content-Type' => mime}, [File.read(file)]]
  else
    [404, {'Content-Type' => 'text/html'}, [File.read("#{root}/404.html")]]
  end
}
