import ResultButton from "../components/result/ResultButton";
import SymtompsResult from "../components/result/symtompsResult";

export default function Result({ abdomenSymtomp, handSymtomp }) {
  return (
    <div
      className="h-screen w-full bg-gradient-to-r from-blue-900 to-cyan-400 
    flex justify-center items-center"
    >
      <div className="bg-slate-100 w-[30rem] h-[40rem] rounded-2xl shadow-2xl">
        <SymtompsResult abdomen={abdomenSymtomp} hand={handSymtomp} />
        <ResultButton />
      </div>
    </div>
  );
}
