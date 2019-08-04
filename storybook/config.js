import { configure } from '@storybook/react'

function loadStories() {
  require('../stories/Test.js')
}

configure(loadStories, module)
