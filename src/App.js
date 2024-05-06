import React, {Suspense ,useState,useEffect} from "react";
import "./assets/css/style.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const CoursePage1 = React.lazy(() => import("./Components/Course/Coursepage1/Index"));
const CoursePage2 = React.lazy(() => import("./Components/Course/CoursePage2/Index"));
const CoursePage3 = React.lazy(() => import("./Components/Course/Coursepage3/Index"));
const ManageCategories = React.lazy(() => import("./Components/ManageCategories/Index"));
const AddCourse = React.lazy(() => import("./Components/Course/AddCourse/Index"));
const EditCourse = React.lazy(() => import("./Components/Course/EditCourse/Index"));
const ManageCourses = React.lazy(() => import("./Components/Course/ManageCourse/Index"));
const Leads = React.lazy(() => import("./Components/Admission/Leads/Index"));
const CreateLeads = React.lazy(() => import("./Components/Admission/Leads/CreateLeads/Index"));
const EditLeads = React.lazy(() => import("./Components/Admission/Leads/EditLeads/Index"));
const ReportLecture = React.lazy(() => import("./Components/Batch Sechduling/ReportLecture/Index"));
const AddLecture = React.lazy(() => import("./Components/Batch Sechduling/ReportLecture/AddLecture/Index"));
const EditLecture = React.lazy(() => import("./Components/Batch Sechduling/ReportLecture/EditLecture/Index"));
const Source = React.lazy(() => import("./Components/Admission/Source/Index"));
const Branch = React.lazy(() => import("./Components/Admission/Branch/Index"));
const LaedStatus = React.lazy(() => import("./Components/Admission/LeadStatus/Index"));
const CareerTransition = React.lazy(() => import("./Components/CareerTransition/Index"));
const HiringPartner = React.lazy(() => import("./Components/HiringPartner/Index"));
const LearningPartner = React.lazy(() => import("./Components/LearningPartner/Index"));
const ManageSubCategory = React.lazy(() => import("./Components/manageSubCategories/Index"));
const University = React.lazy(() => import("./Components/University/Index"));
const ManageContent = React.lazy(() => import("./Components/Course/ManageCourse/ManageContent"));
const Home = React.lazy(() => import("./Components/Home/Index"));
function ErrorBoundary(props) {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    if (hasError) {
      // You can log the error here or perform any other actions
    }
  }, [hasError]);

  if (hasError) {
    return <h1>Something went wrong.</h1>; // Display an error message
  }

  return <>{props.children}</>;
}

function App() {
useEffect(() => {
  const listener = (event) => {
    console.log("event",event)
  };
  
  window.addEventListener("eventName", listener);

  return () => {
    window.removeEventListener("eventName", listener);
  };
}, []); 

  return (
    <>
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/course/page1" component={CoursePage1} />
          <Route exact path="/course/page2" component={CoursePage2} />
          <Route exact path="/course/page3" component={CoursePage3} />
          <Route exact path="/manage-category" component={ManageCategories} />
          <Route exact path="/manage-subcategory" component={ManageSubCategory}
          />
          <Route exact path="/universities-category" component={University} />

          {/* admin panel section */}
          <Route exact path="/careertransition" component={CareerTransition} />
          <Route exact path="/hiringpartner" component={HiringPartner} />
          <Route exact path="/learningpartner" component={LearningPartner} />

          {/* Admission Section  */}

          <Route exact path="/source" component={Source} />
          <Route exact path="/branch" component={Branch} />
          <Route exact path="/lead" component={LaedStatus} />

          <Route exact path="/lecture" component={ReportLecture} />
          <Route exact path="/create-lecture-report" component={AddLecture} />
          <Route exact path="/edit-lecture-report/:id" component={EditLecture} />
        
          {/* Course Page */}
          <Route exact path="/course/addstepform" component={AddCourse} />
          <Route exact path="/course/edit/:id" component={EditCourse} />
          <Route exact path="/managecourses" component={ManageCourses} />
          <Route exact path="/course/manage-content/:id" component={ManageContent}  />
          {/* Lead page */}

          <Route exact path="/all-leads-datas" component={Leads} />
          <Route exact path="/edit-leads/:id" component={EditLeads} />
          {/* <Route exact path="/edit-leads/:id" component={CreateLeads} /> */}
          <Route exact path="/create-leads" component={CreateLeads} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Router>
    </>
  );
}

export default App;

