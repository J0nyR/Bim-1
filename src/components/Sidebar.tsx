import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, BookOpen, ClipboardList, Key, FileText, GanttChartSquare } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;

  const isMarineEngineModule = pathname.includes("-marine-engines");
  const isMarineBoilerModule = pathname.includes("-marine-boiler");
  const isShaftingModule = pathname.includes("-shafting-installations");
  const isOtherAuxiliariesModule = pathname.includes("-other-auxiliaries");

  let navItems: { href: string; label: string; icon: React.ElementType }[] = [];
  let moduleTitle = "Module";

  if (isMarineEngineModule) {
    moduleTitle = "1.1 Marine Engines";
    navItems = [
      { href: "/lesson-plan-marine-engines", label: "Lesson Plan", icon: GanttChartSquare },
      { href: "/teaching-material-marine-engines", label: "Teaching Material", icon: BookOpen },
      { href: "/worksheet-marine-engines", label: "Worksheet", icon: ClipboardList },
      { href: "/answer-key-marine-engines", label: "Answer Key", icon: Key },
      { href: "/rubric-marine-engines", label: "Assessment Rubric", icon: FileText },
    ];
  } else if (isMarineBoilerModule) {
    moduleTitle = "1.2 Marine Boiler";
    navItems = [
      { href: "/lesson-plan-marine-boiler", label: "Lesson Plan", icon: GanttChartSquare },
      { href: "/teaching-material-marine-boiler", label: "Teaching Material", icon: BookOpen },
      { href: "/worksheet-marine-boiler", label: "Worksheet", icon: ClipboardList },
      { href: "/answer-key-marine-boiler", label: "Answer Key", icon: Key },
      { href: "/rubric-marine-boiler", label: "Assessment Rubric", icon: FileText },
    ];
  } else if (isShaftingModule) {
    moduleTitle = "1.3 Shafting & Propeller";
    navItems = [
      { href: "/lesson-plan-shafting-installations", label: "Lesson Plan", icon: GanttChartSquare },
      { href: "/teaching-material-shafting-installations", label: "Teaching Material", icon: BookOpen },
      { href: "/worksheet-shafting-installations", label: "Worksheet", icon: ClipboardList },
      { href: "/answer-key-shafting-installations", label: "Answer Key", icon: Key },
      { href: "/rubric-shafting-installations", label: "Assessment Rubric", icon: FileText },
    ];
  } else if (isOtherAuxiliariesModule) {
    moduleTitle = "1.4 Other Auxiliaries";
    navItems = [
      { href: "/lesson-plan-other-auxiliaries", label: "Lesson Plan", icon: GanttChartSquare },
      { href: "/teaching-material-other-auxiliaries", label: "Teaching Material", icon: BookOpen },
      { href: "/worksheet-other-auxiliaries", label: "Worksheet", icon: ClipboardList },
      { href: "/answer-key-other-auxiliaries", label: "Answer Key", icon: Key },
      { href: "/rubric-other-auxiliaries", label: "Assessment Rubric", icon: FileText },
    ];
  }

  return (
    <aside className="hidden md:flex md:flex-col w-64 flex-shrink-0 border-r bg-card p-4">
      <div className="flex flex-col space-y-4 h-full">
        <h2 className="text-lg font-semibold tracking-tight px-4">{moduleTitle}</h2>
        <nav className="flex flex-col space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={pathname === item.href ? "secondary" : "ghost"}
              className="justify-start"
            >
              <Link to={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="mt-auto">
          <hr className="my-4" />
          <Button asChild variant="outline" className="justify-start w-full mb-2">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;