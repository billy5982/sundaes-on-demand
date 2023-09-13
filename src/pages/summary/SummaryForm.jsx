import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const popover = (
  <Popover id='popover-basic'>
    <Popover.Body>no ice cream will actually be delivered</Popover.Body>
  </Popover>
);

export default function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}>Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId='terms-and-conditions'>
        <Form.Check type={'checkbox'} id={'agreeCheckBox'} onClick={(e) => setChecked(e.target.checked)} label={checkboxLabel} />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!checked}>
        Confirm order
      </Button>
    </Form>
  );
}
