import React from 'react';
import Card from '../card/Card';
import Input from '../input/Input';
import Radio from '../radio/Radio';
import SoccerField from '../soccerField/SoccerField';
import Tag from '../tag/Tag';
import Textarea from '../textarea/Textarea';
import './teamForm.css';

const TeamForm = React.memo(() => {

  const [tags, setTags] = React.useState<string[]>([]);

  return (
    <Card title='Create your team'>
      <div className='team-form__section-title'>TEAM INFORMATION</div>
      <div className='team-form__section'>
        <div className='team-form__row'>
          <Input title='Team name' placeholder='Insert team name' />
          <Input title='Team website' placeholder='http://myteam.com' />
        </div>
        <div className='team-form__row'>
          <Textarea title='Team name' />
          <div className='team-form__team-type'>
            <Radio title='Team Type' />
            <Tag title='Tags' tags={tags} onInsert={setTags} />
          </div>
        </div>
      </div>
      <br />
      <div className='team-form__section-title'>CONFIGURE SQUAD</div>
      <div className='team-form__section'>
        <div className='team-form__row'>
          <SoccerField layout='vertical' />
          <Input title='Team website' placeholder='http://myteam.com' />
        </div>
      </div>
    </Card>
  );
});

export default TeamForm;
