import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, Users, Building, Leaf, Award, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface ESGMetrics {
  category: string;
  score: number;
  target: number;
  description: string;
  icon: React.ElementType;
  color: string;
}

interface ImpactData {
  metric: string;
  current: string;
  target: string;
  progress: number;
  unit: string;
}

export const ESGImpactMeasurement = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('environmental');

  const esgMetrics: ESGMetrics[] = [
    {
      category: 'Environmental',
      score: 87,
      target: 90,
      description: 'Carbon reduction, sustainable building practices, renewable energy integration',
      icon: Leaf,
      color: 'text-green-600'
    },
    {
      category: 'Social',
      score: 92,
      target: 95,
      description: 'Community development, job creation, affordable housing initiatives',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      category: 'Governance',
      score: 94,
      target: 95,
      description: 'Transparency, accountability, ethical investment practices',
      icon: Award,
      color: 'text-purple-600'
    }
  ];

  const impactData: ImpactData[] = [
    {
      metric: 'CO₂ Emissions Reduced',
      current: '450K',
      target: '500K',
      progress: 90,
      unit: 'tons/year'
    },
    {
      metric: 'Jobs Created',
      current: '12.5K',
      target: '15K',
      progress: 83,
      unit: 'direct/indirect'
    },
    {
      metric: 'Housing Units',
      current: '8.2K',
      target: '10K',
      progress: 82,
      unit: 'affordable units'
    },
    {
      metric: 'Energy from Renewables',
      current: '65%',
      target: '80%',
      progress: 81,
      unit: 'total energy'
    },
    {
      metric: 'Community Projects',
      current: '24',
      target: '30',
      progress: 80,
      unit: 'active programs'
    },
    {
      metric: 'Local Procurement',
      current: '78%',
      target: '85%',
      progress: 92,
      unit: 'of spend'
    }
  ];

  const sdgAlignment = [
    { sdg: 'SDG 7', title: 'Affordable Clean Energy', alignment: 95 },
    { sdg: 'SDG 8', title: 'Decent Work & Economic Growth', alignment: 92 },
    { sdg: 'SDG 9', title: 'Industry, Innovation & Infrastructure', alignment: 98 },
    { sdg: 'SDG 11', title: 'Sustainable Cities & Communities', alignment: 96 },
    { sdg: 'SDG 13', title: 'Climate Action', alignment: 88 }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            ESG Integration
          </Badge>
          
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-slate-900 mb-4">
            Impact Measurement & ESG Performance
          </h2>
          
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive environmental, social, and governance metrics aligned with institutional investment standards and UN Sustainable Development Goals.
          </p>
        </motion.div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="overview">ESG Overview</TabsTrigger>
            <TabsTrigger value="impact">Impact Metrics</TabsTrigger>
            <TabsTrigger value="sdg">SDG Alignment</TabsTrigger>
          </TabsList>

          {/* ESG Overview */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              {esgMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="border-slate-200 hover:shadow-lg transition-shadow">
                      <CardHeader className="pb-4">
                        <div className="flex items-center justify-between">
                          <div className={`p-3 rounded-lg bg-slate-100 ${metric.color}`}>
                            <Icon size={24} />
                          </div>
                          <Badge variant="outline" className="text-sm">
                            {metric.score}/{metric.target}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="font-serif text-lg mb-2">
                          {metric.category}
                        </CardTitle>
                        <CardDescription className="mb-4">
                          {metric.description}
                        </CardDescription>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Current Score</span>
                            <span className="font-medium">{metric.score}%</span>
                          </div>
                          <Progress value={metric.score} className="h-2" />
                          <div className="flex justify-between text-sm text-slate-500">
                            <span>Target</span>
                            <span>{metric.target}%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </TabsContent>

          {/* Impact Metrics */}
          <TabsContent value="impact" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {impactData.map((impact, index) => (
                <motion.div
                  key={impact.metric}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="border-slate-200">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-serif text-lg font-medium text-slate-900 mb-1">
                            {impact.metric}
                          </h3>
                          <p className="text-sm text-slate-500">{impact.unit}</p>
                        </div>
                        <Target className="text-slate-400" size={20} />
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-baseline justify-between">
                          <div>
                            <span className="text-2xl font-bold text-slate-900">
                              {impact.current}
                            </span>
                            <span className="text-sm text-slate-500 ml-2">
                              / {impact.target}
                            </span>
                          </div>
                          <Badge 
                            variant={impact.progress >= 90 ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {impact.progress}% Complete
                          </Badge>
                        </div>
                        
                        <Progress 
                          value={impact.progress} 
                          className="h-3"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* SDG Alignment */}
          <TabsContent value="sdg" className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="text-slate-600" size={24} />
                  UN Sustainable Development Goals Alignment
                </CardTitle>
                <CardDescription>
                  Our investment framework directly contributes to achieving key UN SDGs through infrastructure development and impact creation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {sdgAlignment.map((sdg, index) => (
                    <motion.div
                      key={sdg.sdg}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                    >
                      <div className="flex-shrink-0">
                        <Badge variant="outline" className="text-sm font-mono">
                          {sdg.sdg}
                        </Badge>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 mb-1">
                          {sdg.title}
                        </h4>
                        <div className="flex items-center gap-3">
                          <Progress value={sdg.alignment} className="flex-1 h-2" />
                          <span className="text-sm font-medium text-slate-600 min-w-[3rem]">
                            {sdg.alignment}%
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};