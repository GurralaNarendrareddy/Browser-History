import './style.css';
import {Component} from 'react';

class History extends Component{
    render(){
        let {historyData,onSelected}=this.props
        let {id,timeAccessed,logoUrl,title,domainUrl}=historyData
        let Delete=()=>{
            onSelected(id)
        }
        return(
            <div className='res-cont-hist'>
                <div className='image-url-title'>
                    <p className='time'>{timeAccessed}</p>
                    <img src={logoUrl} alt='logo-space' className='logo-image'></img>
                    <p className='logo-name'>{title}</p>
                    <p className='domain-url'>{domainUrl}</p>
                </div>
                <div className='del-icon-cont'>
                    <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" className='delete-icon' alt="delete-icon" onClick={Delete}></img>
                </div>
                
            </div>
        )
    }
}

export default History