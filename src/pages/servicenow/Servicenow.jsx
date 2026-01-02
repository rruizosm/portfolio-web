import React from 'react'
import './servicenow.css'
import Working from '../../images/working.svg'
import Csa from '../servicenow/csa/Csa.jsx'
import Csa_text from '../servicenow/csa/Csa_Text.jsx'
import { useState } from 'react'
import ITSM from './itsm/ITSM.jsx'
import ITSM_Text from './itsm/ITSM_Text.jsx'

export default function Servicenow() {
    const [stateITSM, setStateITSM] = useState(true);
    return (
        <section className='servicenow_sec' id='servicenow'>
            <div className="servicenow-header">
                <h2 className="section-title gradient-text">ServiceNow</h2>
                <div className="header-line"></div>
            </div>
            <div className='servicenow_content'>
                <div className='servicenow_content_left'>
                    <div className='modules'>
                        <h2 className='servicenow-subtitle'>Modules</h2>
                        <div className='modules_list'>
                            <div className='module_item'>SPM</div>
                            <div className='module_item'>ITSM</div>
                            <div className='module_item'>CMDB</div>
                        </div>
                    </div>
                    <div className='certifications'>
                        <h2 className='servicenow-subtitle'>Certifications</h2>
                        <div className='modules_list'>
                            <div className='module_item'>CSA</div>
                            <div className='module_item'>CAD</div>
                            <div className='module_item'>CIS - SPM</div>
                            <div className='module_item' onClick={() => setStateITSM(!stateITSM)}>
                                {stateITSM ? <ITSM /> : <ITSM_Text />}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='servicenow_content_right'>
                    <div className='servicenow_work'>
                        <h2 className='servicenow-subtitle' style={{ textAlign: 'start', marginBottom: "30px" }}>SN Experience</h2>
                        <div className='work_experience'>
                            <div className='work_experience_cloud'>
                                <ul>
                                    <li>Business Rules</li>
                                    <li>Client Scripts</li>
                                    <li>UI Policies</li>
                                    <li>ACL</li>
                                    <li>Scheduled Jobs</li>
                                    <li>Script Includes</li>
                                    <li>Data Sources</li>
                                    <li>Transform Maps</li>
                                    <li>Import Sets</li>
                                    <li>REST API</li>
                                    <li>SOAP API</li>
                                    <li>UI Actions</li>
                                    <li>UI Pages</li>
                                    <li>Notifications</li>
                                    <li>Catalog Items</li>
                                    <li>Record Producers</li>
                                    <li>Flow Designer</li>
                                    <li>IntegrationHub</li>
                                    <li>Knowledge Base</li>
                                    <li>Teamspaces</li>
                                    <li>Widgets</li>
                                    <li>Service Portal</li>
                                    <li>Employee Center</li>
                                    <li>Performance Analytics</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
