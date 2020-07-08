import React, { Component } from "react";
import AskQuestionForm from "./AskQuestionForm";
import Page from "../../components/Page";
import styles from "./CommunityView.css";
import QuestionListView from "./QuestionsListView";
import Button from '@material-ui/core/Button';
import FullScreenDialog from "./FullScreenDialog";


export class CommunityView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
    };
  }

  componentDidMount() {
    // this.setState({
    //   loading: true,
    // });
  }

  render() {
    return (
      <Page>
        <div className={styles.container}>
          <div className={styles.main}> 
          <h1 className={styles.h1Style}>Top community questions</h1>
            <FullScreenDialog history={this.props.history}/>
          </div>
            <QuestionListView/>
        </div>
      </Page>
    );
  }
}
