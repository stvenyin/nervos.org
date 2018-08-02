desc "build and push to build branch"
task :build do
  # build
  puts(`bundle exec middleman build`)

  # check if /build/.git dir exist
  if $?.success? && !File.directory?("./build/.git")
    # get current origin url
    origin_url = `git config --get remote.origin.url`
    # init git
    puts(`cd build && git init &&  git remote add origin #{origin_url.strip} && git checkout -b build && cd ..`)
  end

  # commit and push
  puts(`cd build && git add . && git commit -m "build" && git push -f origin build && cd ..`) if $?.success?
end
