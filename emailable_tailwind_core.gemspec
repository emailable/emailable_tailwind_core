Gem::Specification.new do |s|
  s.name = 'emailable_tailwind_core'
  s.version = '1.0.0'
  s.summary = 'TailwindCSS theme and core styles for Emailable.'
  s.description = 'TailwindCSS theme and core styles for Emailable.'
  s.homepage = 'https://emailable.com'
  s.authors = 'Emailable'
  s.email = 'support@emailable.com'
  s.license = 'MIT'
  s.metadata = {
    'bug_tracker_uri' => 'https://github.com/emailable/emailable_tailwind_core/issues',
    'source_code_uri' => 'https://github.com/emailable/emailable_tailwind_core'
  }
  s.files = Dir['app/**/*', 'lib/**/*', '*']
  s.require_paths = ['lib']
end
