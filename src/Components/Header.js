import React from 'react'
import './Header.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Button from '@material-ui/core/Button';
import { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Signin from './Signin';
import Signup from './Signup';
import { Route, Switch, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Header = () => {
    const [logged, setLogged] = useState(false);
    const [open, setOpen] = useState(false);
    const [username, setUserName] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();
    const storeData = useSelector(state => state);
    const [openError, setOpenError] = useState(false);


    const handleClickError = () => {
        setOpenError(true);
    };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenError(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        if (storeData.AuthReducer.user) {
            setUserName(storeData.AuthReducer.user.firstname);
        }
        setLogged(storeData.AuthReducer.user ? true : false);
    }, [storeData.AuthReducer.user])

    const logout = (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
        handleClose();
    }

    return (
        <header id="home">
            <div id="wrapper">
                <nav id="nav-wrap">
                    {logged ?
                        <li className="signinButton"><a className="smoothscroll" href="#home" onClick={logout}><div style={{ display: "flex", flexDirection: "row" }}><div>התנתק ,</div><div>{username}</div></div></a></li>
                        :
                        <li className="signinButton"><Link onClick={handleOpen} to="/signin">התחבר</Link>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box style={{ background: 'whitesmoke', borderRadius: '15px' }} sx={style}>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <Switch>
                                            <Route path="/signin" component={Signin} />
                                            <Route path="/signup" component={Signup} />
                                        </Switch>
                                    </Typography>
                                </Box>
                            </Modal>
                        </li>
                    }
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <h2>
                            <li className="current"><a className="smoothscroll" href="#home">בית</a></li>
                            <li><a className="smoothscroll" href="#about">קצת על עצמי</a></li>
                            <li><a className="smoothscroll" href={logged ? "#appointment" : "#login"} onClick={logged ? null : handleClickError}>קבע תור</a></li>
                            <li><a className="smoothscroll" href="#Gallery">גלריה</a></li>
                            <li><a className="smoothscroll" href="#price">מחירים</a></li>
                            <li><a className="smoothscroll" href="#shop">חנות</a></li>
                            <li><a className="smoothscroll" href="#contact">צור קשר</a></li>
                            {logged ?
                                <li className="hideSigninButton"><a className="smoothscroll" href="#home" onClick={logout}><div style={{ display: "flex", flexDirection: "row" }}><div>התנתק ,</div><div>{username}</div></div></a></li>
                                :
                                <li className="hideSigninButton"><Link onClick={handleOpen} to="/signin">התחבר</Link>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box style={{ background: 'whitesmoke', borderRadius: '15px' }} sx={style}>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                <Switch>
                                                    <Route path="/signin" component={Signin} />
                                                    <Route path="/signup" component={Signup} />
                                                </Switch>
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </li>
                            }
                        </h2>
                    </ul>
                </nav>
                <Snackbar open={openError} autoHideDuration={2000} onClose={handleCloseError}>
                    <Alert onClose={handleCloseError} severity="error">
                        <h6 style={{ marginTop: '-3.5px', zIndex: '-100' }}>!אתה צריך להתחבר קודם</h6>
                    </Alert>
                </Snackbar>
                <video data-aos="flip-up" className="fullscreen-bg" loop muted autoPlay playsInline>
                    <source src="images/sample.mp4" type="video/mp4" />
                </video>
                <div data-aos="fade-right" className="elementsContainer">
                    <div className="title">
                        <a className="smoothscroll" href="#about">
                            <h1 className="font">
                                SNIR&nbsp;BARBER&nbsp;SHOP
                            </h1>
                        </a>
                    </div>
                    {
                        logged ? <div className="appointment"><a className="smoothscroll" href="#appointment"><Button data-aos="fade-left" variant="outlined" className="appointment" startIcon={<CalendarTodayIcon fontSize="large" />}>
                            קבע תור
                        </Button >
                        </a ></div> :
                            <div data-aos="fade-left" className="appointment"><Link onClick={handleClickError} to="/"><Button data-aos="fade-left" className="appointment" variant="outlined" startIcon={<CalendarTodayIcon fontSize="large" />}>
                                קבע תור
                            </Button >
                            </Link></div>
                    }
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </div >

        </header >
    )

}

export default Header;
