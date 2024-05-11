'use client';
import { Card, DonutChart, Legend} from "@tremor/react";

export default function ContributionCount(props:any) {  
      
  return(
    <Card className="max-w-2xl">
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold pb-4">Contribution Levels</h3>
            <div className="flex">
            <DonutChart
          data={props.data}
          category="sales"
          variant="pie"
          index="name"
          colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
          className="w-72 mr-3 z-10"
        />
         <Legend
                    categories={props.data.map(item => item.name)}
                    colors={['blue', 'cyan', 'indigo', 'violet', 'fuchsia']}
                    className="max-w-xs w-fit"
                />
        </div>
        </Card>
  );
}