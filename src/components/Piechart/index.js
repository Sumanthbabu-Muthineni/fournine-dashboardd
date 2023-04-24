import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

const data = [
  {
    count: 809680,
    language: "Telugu",
  },
  {
    count: 4555697,
    language: "Hindi",
  },
  {
    count: 12345657,
    language: "English",
  },
]

const Piechart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          cx="85%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
          outerRadius="80%"
          dataKey="count"
        >
          <Cell name="Telugu" fill="#fecba6" />
          <Cell name="Hindi" fill="#b3d23f"  />
          <Cell name="English" fill="#a44c9e" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
        
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Piechart