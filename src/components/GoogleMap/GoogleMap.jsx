import React, { memo } from 'react'

// Libraries


const GoogleMap = (className='',location) => {
    return (
        <iframe
            title="Google Map"
            className={className}
            src={location}
            width="600"
            height="540"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    )
}

GoogleMap.default = {
    location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8404599049227!2d144.95373931590427!3d-37.81720574201434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1653971982572!5m2!1sen!2sin"
}



export default memo(GoogleMap)