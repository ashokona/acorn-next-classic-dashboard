import { Button, Form } from 'react-bootstrap';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CsLineIcons from '../cs-line-icons/CsLineIcons';

import HtmlHead from '../components/html-head/HtmlHead';
import LayoutFullpage from '../layout/LayoutFullPage';
import Layout from '../layout/Layout';

export default function Login() {
    const title = 'Login';
    const description = 'Login Page';

    const validationSchema = Yup.object().shape({
        email: Yup.string().email().required('Email is required'),
        password: Yup.string().min(6, 'Must be at least 6 chars!').required('Password is required'),
    });
    const initialValues = { email: '', password: '' };
    const onSubmit = (values) => console.log('submit form', values);

    const formik = useFormik({ initialValues, validationSchema, onSubmit });
    const { handleSubmit, handleChange, values, touched, errors } = formik;

    const leftSide = (
        <div className="min-h-100 d-flex align-items-center">
            <div className="w-100 w-lg-75 w-xxl-50">
                <div>
                    <div className="mb-5">
                        <h1 className="display-3 text-white">Multiple Niches</h1>
                        <h1 className="display-3 text-white">Ready for Your Project</h1>
                    </div>
                    <p className="h6 text-white lh-1-5 mb-5">
                        Dynamically target high-payoff intellectual capital for customized technologies. Objectively integrate emerging core competencies before
                        process-centric communities...
                    </p>
                    <div className="mb-5">
                        <Button size="lg" variant="outline-white" href="/">
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );

    const rightSide = (
        <div className="sw-lg-70 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
            <div className="sw-lg-50 px-5">
                <div className="sh-11">
                    <Link href="/">
                        <div className="logo-default" />
                    </Link>
                </div>
                <div className="mb-5">
                    <h2 className="cta-1 mb-0 text-primary">Welcome,</h2>
                    <h2 className="cta-1 text-primary">lets get started!</h2>
                </div>
                <div className="mb-5">
                    <p className="h6">Please use your credentials to login.</p>
                    <p className="h6">
                        If you are not a member, please <Link href="register">register</Link>.
                    </p>
                </div>
                <div>
                    <form id="loginForm" className="tooltip-end-bottom" onSubmit={handleSubmit}>
                        <div className="mb-3 filled form-group tooltip-end-top">
                            <CsLineIcons icon="email" />
                            <Form.Control type="text" name="email" placeholder="Email" value={values.email} onChange={handleChange} />
                            {errors.email && touched.email && <div className="d-block invalid-tooltip">{errors.email}</div>}
                        </div>
                        <div className="mb-3 filled form-group tooltip-end-top">
                            <CsLineIcons icon="lock-off" />
                            <Form.Control type="password" name="password" onChange={handleChange} value={values.password} placeholder="Password" />
                            <Link className="text-small position-absolute t-3 e-3" href="/forgot-password">
                                Forgot?
                            </Link>
                            {errors.password && touched.password && <div className="d-block invalid-tooltip">{errors.password}</div>}
                        </div>
                        <Button size="lg" type="submit">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
    return (
        <Layout>
            <HtmlHead title={title} description={description} />
            <LayoutFullpage left={leftSide} right={rightSide} />
        </Layout>
    )
}