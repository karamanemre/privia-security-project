import React from 'react'

function FooterBaseTemplate({title,subtitles}) {
  return (
    <div className='d-flex flex-column'>
        <strong className='mb-2 d-flex justify-content-left'>{title}</strong>
        {subtitles && subtitles.map((m,key) => (
            <div key={key} className={"text-muted mb-2 d-flex justify-content-left"}>
                {m}
            </div>
        ))}
    </div>
  )
}

export default FooterBaseTemplate