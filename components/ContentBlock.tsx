import React from 'react'
import TitleContent from './TitleContent'

interface ContentBlockProps {
  sub_unit_name:string,
  blocks_array:{ title: string; content: string }[],
  subUnitStyles:string,
  contentBlockStyles:string
}

const ContentBlock:React.FC<ContentBlockProps> = ({sub_unit_name, blocks_array, subUnitStyles, contentBlockStyles}) => {
  return (
    <div className={contentBlockStyles}>

        {/* sub-unit */}
        <div className={subUnitStyles}>{sub_unit_name}</div>

        {/* content */}
        {blocks_array.map((data, index)=>(
          <TitleContent key={index} title={data.title} titleStyles='font-family-Roboto font-bold text-[18px]' content={data.content} contentStyles='font-family-Roboto text-[16px] font-normal' containerStyles='flex flex-col gap-[8px]'/>
        ))}

    </div>
  )
}

export default ContentBlock