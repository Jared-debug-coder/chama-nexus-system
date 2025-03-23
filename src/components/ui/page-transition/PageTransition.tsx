
import { ReactNode } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <SwitchTransition mode="out-in">
      <CSSTransition
        key={location.pathname}
        classNames="page-transition"
        timeout={300}
        unmountOnExit
      >
        <div className="page-transition-wrapper">
          <div>{children}</div>
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default PageTransition;
