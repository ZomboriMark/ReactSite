function Kereso({ cimLista, tipus }) {
const [szuro, setSzuro] = useState('');
const [szurtCimek, setSzurtCimek] = useState(cimLista);


useEffect(() => {
const szurt = cimLista.filter(cim =>
cim.toLowerCase().includes(szuro.toLowerCase())
);
setSzurtCimek(szurt);
}, [szuro, cimLista]);


return (
<div className="p-6">
<h2 className="text-2xl font-bold mb-4">{tipus} kereső</h2>
<input
type="text"
placeholder="Keresés..."
value={szuro}
onChange={(e) => setSzuro(e.target.value)}
className="border p-2 rounded w-full mb-4"
/>
<ul className="list-disc list-inside">
{szurtCimek.map((cim, index) => (
<li key={index}>{cim}</li>
))}
</ul>
</div>
);
}
export default Kereso