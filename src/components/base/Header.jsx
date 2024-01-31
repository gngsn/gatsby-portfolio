import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

import { device } from '../../lib/styles/sizes';

const Header = () => {
  console.log("Hi, good day! If you're curious about me and would like to see my passion, please kindly reach out to me by sending an email to 💌 'enfj.dev@gmail.com'")

    return (
        <>
        <Block>
            <Link className="link" to={"/"}> park. </Link>
            <Link className="link" to={"/about"}> about. </Link>
            <Link className="link" to={"/project"}> project. </Link>
            <Link className="link" to={"/#contact"}> contact. </Link>
        </Block>
      </>
    )
}

const ResumeAlert = ({open, handleClose}) => {
  return (
    <Dialog
          open={open}
          onClose={handleClose}
      >
      <DialogTitle>
        "Use Google's location service?"
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const Block = styled.div`
    cursor: none;
    border-bottom: 1px solid #000;
    background-color: ${palette.background};
    position: fixed; 
    display: flex; 
    z-index: 10; 
    top: 0%; 
    width: 100%; 
    ${device.mobile} {
        flex-wrap: wrap;
        border-bottom: none;
    }

    a, .link {
        padding: 10px;
        width:100%; max-width: 200px;
        display: inline-flex;
        align-items: center; justify-content: center;
        font-size: 2.2rem;
        font-weight: 900;
        margin: 0px; position: relative;
        color: ${palette.black0};
        text-decoration: none;
        &:hover {
            text-decoration: line-through;
        }

        ${device.mobile} {
            max-width: none;
            flex-basis: 50%;
            font-size: 1.5rem;
            border-left: 1px solid ${palette.black0};
            border-bottom: 1px solid ${palette.black0};
        }

        &:first-child {
            margin: 0px auto 0px 0px;
            color: ${palette.primary};
            ${device.tablet} {
                border-right: none;
            }
            ${device.mobile} {
                color: ${palette.primary};
            }
        }
    }
`;

export default Header;