function MyComponent3 ( {title, content, writer} ) {
  return(
    <div>
      props: {title} <br/>
      props: {content} <br/>
      props: {writer} <br/>

    </div>
  )
}

MyComponent3.defaultProps = {
  writer : 'admin'
}

export default MyComponent3