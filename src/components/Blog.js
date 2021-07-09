import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import math from 'remark-math'
import gfm from 'remark-gfm'
import katex from 'rehype-katex'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'


import ss1 from './data/speech_separation_1.md'
import Jumbotron from 'react-bootstrap/Jumbotron'

const jumboStyle = {
    backgroundColor: 'transparent',
    marginBottom: '0',
    // fontFamily: 'Seravek'
}

function Blog() {
    const [post, setPost] = useState('')

    useEffect(() => {
        fetch(ss1)
            .then(res => res.text())
            .then(response => setPost(response))
    })

    const codeComp = {
        code({node, inline, className, children, ...props}) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
                <SyntaxHighlighter style={coy} 
                                showLineNumbers="True" 
                                language={match[1]} 
                                PreTag='div' 
                                children={String(children).replace(/\n$/, '')} {...props} />
                ) : (
                <code className={className} {...props} />
            )
        }
    }

    return(
        <Jumbotron style={jumboStyle}>            
            <ReactMarkdown 
                remarkPlugins={[math, gfm]} 
                rehypePlugins={[katex]}
                components={codeComp}
                children={post} />
        </Jumbotron>
    )
}

export default Blog
