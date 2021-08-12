import React from "react";
import { Comment, Form, Button, Header, Icon } from "semantic-ui-react";
import moment from "moment";

import hm from "./human.jpg";

function SingleComment(detail) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Avatar src={hm} />
        <Comment.Author as="a">방문자</Comment.Author>
        <Comment.Metadata>
          <div>{detail.info.time}</div>
        </Comment.Metadata>
        <Comment.Text>{detail.info.content}</Comment.Text>
      </Comment.Content>
    </Comment>
  );
}

class Comments extends React.Component {
  constructor() {
    super();
    this.state = {
      inputContent: "",
      inputTime : "",
      commentsList: [],
    };
  }

  render() {
    return (
      <Comment.Group style={{ marginLeft: "600px" }}>
        <Header as="h3" dividing>
          Comments
        </Header>

        {this.state.commentsList.map((comments) => (
          <SingleComment info={comments} />
        ))}

        <Form reply>
          <Form.TextArea
            value={this.state.inputContent}
            placeholder= "댓글을 입력해주세요."
            onChange = {(e) => this.setState({ inputContent: e.target.value })}
          />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
            onClick={() => {if (this.state.inputContent != ""){
              this.setState( (prevState) => {
                return {
                  commentsList: [...prevState.commentsList, {content: this.state.inputContent, time : moment().format("YYYY년 MM월 DD일 HH시 mm분 ss초"),},],
                  inputContent: ""
                };
              })
            }
            else {
              alert("내용을 입력해주세요.");
            }
          }}
          />
        </Form>
        <br />
      </Comment.Group>
    );
  }
}

export default Comments;
