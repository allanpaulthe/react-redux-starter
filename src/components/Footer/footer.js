import React, {Component} from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import { imagePath } from '../../store/utils';
import './footer.scss';

class FooterComponent extends Component {
    render() {
        return (
            <div>
                <Jumbotron style={{ backgroundColor: '#461204' }} className='footer-container text-white' >
                    <Row>
                        <Col>
                            <div className="text-left">
                                <div className='block'>
                                    <p className="mb-0">Qburst</p>
                                </div>
                                <div className='block mt-3'>
                                    <p className="mb-0">Contact Numbers</p>
                                    <p className="mb-0">+91 0000 000 000</p>
                                </div>
                                <div className='block mt-3'>
                                    <p className="mb-0">Email us @</p>
                                    <p className="mb-0">contact@aburst.com</p>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className='footer-right text-right'>
                                <span className='footer-images'>
                                    <a href='https://www.facebook.com/qburst' target="_blank" rel="noopener noreferrer" alt="facebook">
                                        <img src={imagePath('footer_fb.png')} alt="Facebook" />
                                    </a>
                                    <a href='https://www.instagram.com/qburst/' target="_blank" rel="noopener noreferrer" alt="instagram">
                                        <img src={imagePath('footer_insta.png')} alt="Instagram" />
                                    </a>
                                </span>
                                <p className="mb-0 mt-4">Qburst © 2019  All Rights Reserved</p>
                                <p className="mb-0">Terms & Conditions   |   Privacy Policy</p>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>            
            </div>
        );
    }
    
}



export default FooterComponent;