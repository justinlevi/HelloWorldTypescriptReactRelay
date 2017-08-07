import * as Relay from 'react-relay/classic';

interface Props {
  text: string;
  userId: string;
}

interface State {
}

export default class AddTweetMutation extends Relay.Mutation<Props, State> {

  public getMutation() {
    return Relay.QL`mutation{addTweet}`;
  }

  public getFatQuery() {
    return Relay.QL`
            fragment on AddTweetPayload {
                tweetEdge
                user
            }
        `;
  }

  public getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentName: 'user',
      parentID: this.props.userId,
      connectionName: 'tweets',
      edgeName: 'tweetEdge',
      rangeBehaviors: {
        '': 'append',
      },
    }];
  }

  public getVariables() {
    return this.props;
  }
}