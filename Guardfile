# Tell the browser to automatically reload whenever anything changes in the
# main directory. See https://github.com/guard/guard-livereload
guard 'livereload' do
  watch(%r{.+})
end

guard 'compass', :compile_on_start => true do
  watch(%r{styles/.*\.scss})
end
