import React from 'react';
import './sidebar.scss'

export default class Sidebar extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }   

    render () {
        return (
            <div className='sidebar left'>
                <ins className="adsbygoogle"
                    style={{ display: 'block' }}
                    data-ad-client="ca-pub-8152297000962490"
                    data-ad-slot="4515997994"
                    data-ad-format="auto"
                    data-full-width-responsive="true"></ins>
            </div>
        );
    }
}