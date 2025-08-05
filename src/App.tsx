import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import LessonPlanMarineEngines from "./pages/LessonPlanMarineEngines";
import TeachingMaterialMarineEngines from "./pages/TeachingMaterialMarineEngines";
import WorksheetMarineEngines from "./pages/WorksheetMarineEngines";
import AnswerKeyMarineEngines from "./pages/AnswerKeyMarineEngines";
import RubricMarineEngines from "./pages/RubricMarineEngines";
import LessonPlanMarineBoiler from "./pages/LessonPlanMarineBoiler";
import TeachingMaterialMarineBoiler from "./pages/TeachingMaterialMarineBoiler";
import WorksheetMarineBoiler from "./pages/WorksheetMarineBoiler";
import AnswerKeyMarineBoiler from "./pages/AnswerKeyMarineBoiler";
import RubricMarineBoiler from "./pages/RubricMarineBoiler";
import LessonPlanShaftingInstallations from "./pages/LessonPlanShaftingInstallations";
import TeachingMaterialShaftingInstallations from "./pages/TeachingMaterialShaftingInstallations";
import WorksheetShaftingInstallations from "./pages/WorksheetShaftingInstallations";
import AnswerKeyShaftingInstallations from "./pages/AnswerKeyShaftingInstallations";
import RubricShaftingInstallations from "./pages/RubricShaftingInstallations";
import LessonPlanOtherAuxiliaries from "./pages/LessonPlanOtherAuxiliaries";
import TeachingMaterialOtherAuxiliaries from "./pages/TeachingMaterialOtherAuxiliaries";
import WorksheetOtherAuxiliaries from "./pages/WorksheetOtherAuxiliaries";
import AnswerKeyOtherAuxiliaries from "./pages/AnswerKeyOtherAuxiliaries";
import RubricOtherAuxiliaries from "./pages/RubricOtherAuxiliaries";
import Syllabus from "./pages/Syllabus";
import SummativeTest from "./pages/SummativeTest";
import SummativeTestAnswerKey from "./pages/SummativeTestAnswerKey";
import StudentHandbook from "./pages/StudentHandbook";
import GrammarReference from "./pages/GrammarReference";
import Login from "./pages/Login";
import { SessionContextProvider } from "./context/SessionContext";

const queryClient = new QueryClient();

const App = () => (
  <SessionContextProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            
            {/* Course Overview Routes */}
            <Route path="/syllabus" element={<Syllabus />} />
            <Route path="/summative-test" element={<SummativeTest />} />
            <Route path="/summative-test-answer-key" element={<SummativeTestAnswerKey />} />
            <Route path="/student-handbook" element={<StudentHandbook />} />
            <Route path="/grammar-reference" element={<GrammarReference />} />

            <Route element={<Layout />}>
              {/* Marine Engines Module Routes */}
              <Route path="/lesson-plan-marine-engines" element={<LessonPlanMarineEngines />} />
              <Route path="/teaching-material-marine-engines" element={<TeachingMaterialMarineEngines />} />
              <Route path="/worksheet-marine-engines" element={<WorksheetMarineEngines />} />
              <Route path="/answer-key-marine-engines" element={<AnswerKeyMarineEngines />} />
              <Route path="/rubric-marine-engines" element={<RubricMarineEngines />} />

              {/* Marine Boiler Module Routes */}
              <Route path="/lesson-plan-marine-boiler" element={<LessonPlanMarineBoiler />} />
              <Route path="/teaching-material-marine-boiler" element={<TeachingMaterialMarineBoiler />} />
              <Route path="/worksheet-marine-boiler" element={<WorksheetMarineBoiler />} />
              <Route path="/answer-key-marine-boiler" element={<AnswerKeyMarineBoiler />} />
              <Route path="/rubric-marine-boiler" element={<RubricMarineBoiler />} />

              {/* Shafting Installations Module Routes */}
              <Route path="/lesson-plan-shafting-installations" element={<LessonPlanShaftingInstallations />} />
              <Route path="/teaching-material-shafting-installations" element={<TeachingMaterialShaftingInstallations />} />
              <Route path="/worksheet-shafting-installations" element={<WorksheetShaftingInstallations />} />
              <Route path="/answer-key-shafting-installations" element={<AnswerKeyShaftingInstallations />} />
              <Route path="/rubric-shafting-installations" element={<RubricShaftingInstallations />} />

              {/* Other Auxiliaries Module Routes */}
              <Route path="/lesson-plan-other-auxiliaries" element={<LessonPlanOtherAuxiliaries />} />
              <Route path="/teaching-material-other-auxiliaries" element={<TeachingMaterialOtherAuxiliaries />} />
              <Route path="/worksheet-other-auxiliaries" element={<WorksheetOtherAuxiliaries />} />
              <Route path="/answer-key-other-auxiliaries" element={<AnswerKeyOtherAuxiliaries />} />
              <Route path="/rubric-other-auxiliaries" element={<RubricOtherAuxiliaries />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </SessionContextProvider>
);

export default App;