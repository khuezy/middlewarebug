import { NextjsSite, StackContext } from 'sst/constructs'

export function Web({ stack }: StackContext) {

  const site = new NextjsSite(stack, 'SiteTest', {
    path: 'web',
    waitForInvalidation: false
  })

  site.url
  stack.addOutputs({
    URL: site.url || ''
  })

  return {
    URL: site.url || ''
  }
}