/* eslint-env mocha */
import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItSourceMap from '../src/index'

const mdi = markdownIt()
mdi.use(markdownItSourceMap)

describe('tokens', function () {
  it('should render heading correctly', function () {
    assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>', '# Hello world')
  })
  it('should render paragraph correctly', function () {
    assert(mdi.render('Hello world').trim() === '<p>Hello world</p>', 'Hello world')
  })
})

