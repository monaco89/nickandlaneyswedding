import React from 'react';
import cn from 'classnames';
import Container from './container';

function Alert(): JSX.Element {
  return (
    <div
      className={cn('border-b', {
        'bg-accent-7 border-accent-7 text-white': true,
        'bg-accent-1 border-accent-2': false,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          The Wedding is xxx days away!!
        </div>
      </Container>
    </div>
  );
}

export default Alert;
