import React from "react";
import { Link } from "react-router-dom";

export default class Detail extends React.Component {

    constructor() {
        super();

        this.state = { n: {} };
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/notice/${this.props.match.params.id}`)
            .then(result => result.json())
            .then( n => {
                // console.log(list[0].title);
                this.setState({ n });
            });
    }

    render() {
        return <main>
            <h2 className="main title">공지사항</h2>

            <div className="breadcrumb">
                <h3 className="hidden">breadlet</h3>
                <ul>
                    <li>home</li>
                    <li>고객센터</li>
                    <li>공지사항</li>
                </ul>
            </div>

            <div className="margin-top first">
                <h3 className="hidden">공지사항 내용</h3>
                <table className="table">
                    <tbody>
                        <tr>
                            <th>제목</th>
                            <td className="text-align-left text-indent text-strong text-orange" colspan="3">{this.state.n.title}</td>
                        </tr>
                        <tr>
                            <th>작성일</th>
                            <td className="text-align-left text-indent" colspan="3">{this.state.n.regdate}</td>
                        </tr>
                        <tr>
                            <th>작성자</th>
                            <td>{this.state.n.writerId}</td>
                            <th>조회수</th>
                            <td>{this.state.n.hit}</td>
                        </tr>
                        <tr>
                            <th>첨부파일</th>
                            <td colspan="3"></td>
                        </tr>
                        <tr className="content">
                            <td colspan="4">{this.state.n.content}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="margin-top text-align-center">
                <Link className="btn btn-list" to="list">목록</Link>
            </div>

            <div className="margin-top">
                <table className="table border-top-default">
                    <tbody>

                        <tr>
                            <th>다음글</th>
                            <td colspan="3" className="text-align-left text-indent">다음글이 없습니다.</td>
                        </tr>

                        <tr>
                            <th>이전글</th>
                            <td colspan="3" className="text-align-left text-indent"><a className="text-blue text-strong" href="">스프링 DI 예제 코드</a></td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </main>;
    }

};