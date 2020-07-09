import React, { Component } from "react";
import AskQuestionForm from "./AskQuestionForm";
import Page from "../../components/Page";
import styles from "./CommunityView.css";
import QuestionListView from "./QuestionsListView";
import Button from '@material-ui/core/Button';
import FullScreenDialog from "./FullScreenDialog";
import TextField from '@material-ui/core/TextField'


export class CommunityView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // handle input field changes
  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      [evt.target.name]: value,
    });
  }

  render() {
    return (
      <Page>
        <div className={styles.container}>
          <div className={styles.main}> 
          <TextField 
            id="standard-basic" 
            label="Search question...." 
            name="search"
            onChange={this.handleChange}
            style={{width: '100%'}}/>
          <h1 className={styles.h1Style}>Top community questions</h1>
            <FullScreenDialog history={this.props.history}/>
          </div>
            <QuestionListView search={this.state.search}/>
        </div>
      </Page>
    );
  }
}
