import React, { Component } from 'react'

export class PostItem extends Component {
  render() {
    const {title, content} = this.props.post;
    return (
      <div>
        <h2>{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{__html: content.rendered}}></div>
      </div>
    )
  }
}

export default PostItem
