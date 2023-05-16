import React, { ReactNode } from 'react'

interface ISnippetTest {
  children?: ReactNode
  user: User
}

function SnippetTest({ user }: ISnippetTest): ReactNode {
  return <>Test</>
}

export { SnippetTest }
