import React, {Component} from 'react';
import styled from 'styled-components';
import AgreeBox from './AgreeBox';
import SignaturePad from './SignaturePad';

const Form = styled.form`
    padding: 0 60px;
    ul{
        margin: 0 auto;
        li{
            list-style: none;
            border-bottom: 1px solid #722d7b;
            padding-top: 70px;

            &.inputFlex{                          /* 이름, 부서, 이메일, 핸드폰 디자인 */
                display: flex;
                label{
                    width: 35%;
                    font-size: 31px;
                    list-style: none;
                    text-align: left;
                    color: #722d7b;
                }
                input{
                    width: 70%;
                    font-size: 20px;
                    border: 0 none;
                    height: 45.6px;
                    background-color: transparent;
                    box-shadow: none;
                }
            }
            &.userName{                            /* 이름 디자인 */
                padding-top: 50px;
                label{
                    letter-spacing: 25.0px;
                }
            }
            &.department, &.eMail, &.phone{         /* 부서, 이메일, 핸드폰 디자인*/
                label{
                    letter-spacing: 9.8px;
                }
            }
            &.modal{                                /* 동의서 박스 디자인 */
                border-bottom: 0 none; 
                padding-top: 54px;
            }
            &.sign{                                 /* 서명 패드 디자인 */
                border-bottom: 0 none;
                padding: 36px 0 60px;
                label{                    
                    letter-spacing: 25.0px;
                }
            }

            label{                                  /* 전체 label 공통 디자인 */
                font-size: 31px;
                list-style: none;
                color: #722d7b;
            }
        }
    }

    @media (max-width: 750px){
        padding: 0 30px;
        ul{
            li{
                list-style: none;
                border-bottom: 0.5px solid #722d7b;
                padding-top: 35px;
                &.inputFlex{                          /* 이름, 부서, 이메일, 핸드폰 디자인 */
                    label{
                        font-size: 15.5px;
                    }
                    input{
                        font-size: 10px;
                        border: 0 none;
                        height: 22.8px;
                    }
                }
                &.userName{                            /* 이름 디자인 */
                    padding-top: 25px;
                    label{                        
                        letter-spacing: 12.5px;
                    }
                }
                &.department, &.eMail, &.phone{         /* 부서, 이메일, 핸드폰 디자인*/
                    label{                        
                        letter-spacing: 4.9px;
                    }
                }
                &.modal{                                /* 동의서 박스 디자인 */
                    position: relative;
                    text-align: center;
                    margin-top: 27px;
                    margin-bottom: 26px;
                }
                &.sign{                                 /* 서명 패드 디자인 */
                    padding: 18px 0 30px;
                    label{
                        letter-spacing: 12.5px;
                    }
                }
                label{                                  /* 전체 label 공통 디자인 */
                    font-size: 15.5px;
                }
            }
        }
    }
`

class SignupForm extends Component {
    render(){
        return (
            <Form>
                <ul>
                    <li className="inputFlex userName">
                        <label htmlFor="userName">이름</label>
                        <input type="text" title="이름" required/>
                    </li>
                    <li className="inputFlex">
                        <label htmlFor="company">소속기관</label>
                        <input type="text" title="소속기관" required/>
                    </li>
                    <li className="inputFlex department">
                        <label htmlFor="department">근무과</label>
                        <input type="text" title="근무과" required/>
                        </li>
                    <li className="inputFlex eMail">
                        <label htmlFor="email">이메일</label>
                        <input type="email" required />
                    </li>
                    <li className="inputFlex phone">
                        <label htmlFor="phone">휴대폰</label>
                        <input type="tel" required />
                    </li>
                    <li  className="modal">
                        <AgreeBox />
                    </li>
                    <li className="sign">
                        <label htmlFor="sign">서명</label>
                        <SignaturePad />
                    </li>
                </ul>                        
            </Form>
        );
    }
}

export default SignupForm;