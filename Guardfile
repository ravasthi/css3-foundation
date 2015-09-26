# Tell the browser to automatically reload whenever anything changes in the
# main directory. See https://github.com/guard/guard-livereload
guard :livereload do
  watch(%r{styles-compiled/.+\.css})
  watch(%r{scripts-compiled/.+\.js})
  watch(%r{([^/]+/)*.+\.html})
end

guard :compass, compile_on_start: true do
  watch(%r{styles/.+\.scss})
end

guard :sprockets,
      destination: 'scripts-compiled',
      asset_paths: ['scripts', 'bower_components'],
      root_file:   ['scripts/application-header.js', 'scripts/application.js'],
      minify:      true do
  watch %r{scripts/.+\.js}
end

guard :pow, restart_on_start: true, restart_on_reload: false do
   watch('.powrc')
   watch('.powenv')
   watch('Gemfile')
   watch('Gemfile.lock')
   watch(%r{config\.(rb|ru)})
end
