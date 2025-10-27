import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const methods = [
    {
      title: 'Продажи без давления',
      description: 'Система естественного вовлечения гостя в диалог, которая увеличивает средний чек на 20-35%',
      icon: 'Users',
      details: 'Забудьте про заученные скрипты. Учим персонал читать настроение гостя и предлагать именно то, что нужно сейчас.'
    },
    {
      title: 'Полевое внедрение',
      description: 'Работаю с вашей командой прямо в зале — исправляю ошибки в моменте, закрепляю навыки',
      icon: 'Target',
      details: 'Не теория в переговорной, а живая практика. 3-5 дней — и команда работает по новой системе.'
    },
    {
      title: 'Автономная система',
      description: 'Персонал продает сам, без вашего контроля. Мотивация встроена в процесс',
      icon: 'Zap',
      details: 'Создаем условия, где продавать выгодно и приятно. Система работает даже когда вас нет.'
    }
  ];

  const programs = [
    {
      title: 'Хостес: от привратника к продавцу',
      duration: '2 дня',
      format: 'Полевое обучение',
      price: 'от 150 000 ₽',
      results: [
        'Увеличение конверсии посадки на 25%',
        'Рост среднего чека через upsell',
        'Формирование очереди в пиковые часы'
      ]
    },
    {
      title: 'Официанты: продажи через сервис',
      duration: '3 дня',
      format: 'Теория + практика в зале',
      price: 'от 200 000 ₽',
      results: [
        'Рост среднего чека на 30%',
        'Повторные визиты +40%',
        'Команда продает без скриптов'
      ]
    },
    {
      title: 'Управляющий: система без вас',
      duration: '5 дней',
      format: 'Индивидуальный коучинг',
      price: 'от 350 000 ₽',
      results: [
        'Автономная система продаж',
        'Мотивация персонала встроена',
        'Контроль без микроменеджмента'
      ]
    }
  ];

  const scenarios = [
    {
      role: 'Хостес',
      situation: 'Гость пришел один в пятницу вечером',
      wrong: '— Стол на одного? Проходите.',
      right: '— Добрый вечер! Ждёте кого-то или расслабиться после недели? У нас сегодня отличная атмосфера у барной стойки — бармен готовит новый коктейль.',
      result: 'Средний чек +800₽ (коктейль вместо воды)'
    },
    {
      role: 'Официант',
      situation: 'Пара выбирает вино к ужину',
      wrong: '— Какое вино будете?',
      right: '— Вижу, вы выбрали стейк и рыбу — интересно! Могу предложить два бокала разных вин под каждое блюдо или сразу бутылку, которая подойдет к обоим? Сэкономите 400 рублей.',
      result: 'Средний чек +1500₽ (бутылка вместо бокалов)'
    },
    {
      role: 'Хостес',
      situation: 'В зале нет свободных столов',
      wrong: '— Извините, мест нет. Ждать будете?',
      right: '— Сейчас полная посадка — это значит, вы пришли в правильное время! Через 15 минут освободится лучший стол у окна. Пока предлагаю комфортный диванчик у барной стойки — принесу welcome-напиток.',
      result: 'Гость остается + допродажа напитков'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-white/80 backdrop-blur-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-foreground">MARICO<span className="text-primary">PRO</span></div>
          <div className="hidden md:flex gap-8">
            <a href="#methods" className="text-sm font-medium hover:text-primary transition-colors">Методики</a>
            <a href="#programs" className="text-sm font-medium hover:text-primary transition-colors">Обучение</a>
            <a href="#scenarios" className="text-sm font-medium hover:text-primary transition-colors">Сценарии</a>
          </div>
          <Button className="bg-accent hover:bg-accent/90">
            <Icon name="Calendar" className="mr-2" size={16} />
            Консультация
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              10+ лет в HoReCa
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Система продаж,<br />которая работает<br />
              <span className="text-primary">без вас</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Превращаю официантов и хостес в команду, которая продает естественно, увеличивая средний чек на 20-35% без заученных скриптов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8">
                <Icon name="Rocket" className="mr-2" size={20} />
                Экспресс-аудит системы продаж
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="PlayCircle" className="mr-2" size={20} />
                Смотреть кейсы
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">20-35%</div>
                <div className="text-sm text-muted-foreground">Рост среднего чека</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3-5 дней</div>
                <div className="text-sm text-muted-foreground">Внедрение системы</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <div className="text-sm text-muted-foreground">Ресторанов и кафе</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="methods" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Методики без скриптов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Система, которая превращает обслуживание в естественные продажи
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <Card key={index} className="transition-transform duration-300 hover:scale-105 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={method.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-2xl">{method.title}</CardTitle>
                  <CardDescription className="text-base">{method.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{method.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertCircle" className="text-accent" size={24} />
                </div>
                <div>
                  <CardTitle className="text-2xl mb-2">Главная боль владельцев HoReCa</CardTitle>
                  <CardDescription className="text-base">
                    Персонал обслуживает, но не продает. Система работает только под вашим контролем. 
                    Средний чек растет только когда вы в зале.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <Icon name="X" className="text-destructive mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Заученные скрипты убивают сервис</div>
                    <div className="text-sm text-muted-foreground">Гости чувствуют робота, не человека</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                  <div>
                    <div className="font-semibold mb-1">Живые сценарии вовлечения</div>
                    <div className="text-sm text-muted-foreground">Персонал чувствует настроение и предлагает</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="programs" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Программы обучения</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полевое обучение прямо в вашем заведении. Теория + практика в зале
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="transition-transform duration-300 hover:scale-105 border-2 hover:border-primary/50 flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <div className="flex gap-4 mt-4">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {program.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Icon name="Users" size={14} />
                      {program.format}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="text-3xl font-bold text-primary mb-6">{program.price}</div>
                  <div className="space-y-3 flex-1">
                    {program.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-primary/90">
                    Узнать подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-16 border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Icon name="Calculator" className="text-primary" size={28} />
                Миф: "Обучение персонала — это дорого"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-2">ФАКТ: Простой расчет окупаемости</div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span>Средний чек до обучения:</span>
                      <span className="font-semibold">1 500 ₽</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span>Средний чек после (+25%):</span>
                      <span className="font-semibold">1 875 ₽</span>
                    </div>
                    <div className="flex justify-between p-2 bg-muted/50 rounded">
                      <span>Гостей в день:</span>
                      <span className="font-semibold">100</span>
                    </div>
                    <div className="flex justify-between p-2 bg-primary/10 rounded font-bold">
                      <span>Дополнительная выручка/день:</span>
                      <span className="text-primary">+37 500 ₽</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Окупаемость инвестиции</div>
                    <div className="text-5xl font-bold text-primary mb-2">5-8 дней</div>
                    <div className="text-sm text-muted-foreground">
                      После этого — чистая прибыль от системы
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="scenarios" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">База живых сценариев</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готовые диалоги для типичных ситуаций. Не скрипты — естественные варианты общения
            </p>
          </div>

          <Tabs defaultValue="0" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {scenarios.map((scenario, index) => (
                <TabsTrigger key={index} value={index.toString()}>
                  {scenario.role}
                </TabsTrigger>
              ))}
            </TabsList>

            {scenarios.map((scenario, index) => (
              <TabsContent key={index} value={index.toString()} className="animate-fade-in">
                <Card className="border-2">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{scenario.role}</Badge>
                      <Icon name="MessageSquare" className="text-muted-foreground" size={16} />
                    </div>
                    <CardTitle className="text-xl">Ситуация: {scenario.situation}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="p-4 bg-destructive/5 border-l-4 border-destructive rounded">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon name="X" className="text-destructive mt-1" size={20} />
                        <div className="font-semibold text-destructive">Типичная ошибка</div>
                      </div>
                      <p className="text-sm pl-7">{scenario.wrong}</p>
                    </div>

                    <div className="p-4 bg-primary/5 border-l-4 border-primary rounded">
                      <div className="flex items-start gap-2 mb-2">
                        <Icon name="Check" className="text-primary mt-1" size={20} />
                        <div className="font-semibold text-primary">Живой сценарий продажи</div>
                      </div>
                      <p className="text-sm pl-7">{scenario.right}</p>
                    </div>

                    <div className="flex items-center gap-2 p-4 bg-accent/10 rounded-lg">
                      <Icon name="TrendingUp" className="text-accent" size={24} />
                      <div>
                        <div className="font-semibold">Результат:</div>
                        <div className="text-sm text-muted-foreground">{scenario.result}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-12 text-center">
            <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
              <CardContent className="p-8">
                <Icon name="BookOpen" className="text-accent mx-auto mb-4" size={48} />
                <h3 className="text-2xl font-bold mb-2">База из 50+ сценариев</h3>
                <p className="text-muted-foreground mb-6">
                  Для хостес, официантов, барменов и управляющих. Скачайте 10 бесплатных прямо сейчас
                </p>
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  <Icon name="Download" className="mr-2" size={20} />
                  Скачать 10 сценариев бесплатно
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="container mx-auto max-w-4xl text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Готовы к системе, которая работает без вас?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Экспресс-аудит вашей текущей системы продаж — 60 минут, после которых вы получите план роста среднего чека
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на аудит
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white/10">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Telegram: @marico_pro
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">MARICO<span className="text-accent">PRO</span></div>
              <p className="text-sm opacity-80">
                Экспертные решения для HoReCa. Система продаж без скриптов и давления.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Методики</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Продажи без давления</li>
                <li>Полевое внедрение</li>
                <li>Автономная система</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Программы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Обучение хостес</li>
                <li>Обучение официантов</li>
                <li>Коучинг управляющих</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@maricopro.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  @marico_pro
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-60">
            © 2024 MARICO PRO. Марина — эксперт по продажам и сервису в HoReCa
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;