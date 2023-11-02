import React from 'react'

interface TitleContentProps{
  title:string,
  content:string,
  titleStyles:string,
  contentStyles:string,
  containerStyles:string,
}

const TitleContent:React.FC<TitleContentProps> = ({title,titleStyles, content, contentStyles, containerStyles}) => {
  return (
    <div className={containerStyles}>
      <div className={titleStyles}>{title}</div>
      <div className={contentStyles}>{content}</div>
    </div>
  )
}

export default TitleContent