import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Settings, Users, FolderOpen, MessageSquare } from "lucide-react";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-muted-foreground">Manage your projects and testimonials</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="testimonials">Testimonials</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                  <FolderOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">+2 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Testimonials</CardTitle>
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">28</div>
                  <p className="text-xs text-muted-foreground">+5 this month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Featured Projects</CardTitle>
                  <FolderOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">Currently featured</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Avg Rating</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.9</div>
                  <p className="text-xs text-muted-foreground">From testimonials</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "E-commerce Platform", status: "completed", client: "RetailCorp" },
                      { name: "Mobile Healthcare App", status: "in-progress", client: "HealthTech" },
                      { name: "Financial Dashboard", status: "planning", client: "FinanceInc" }
                    ].map((project, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{project.name}</p>
                          <p className="text-sm text-muted-foreground">{project.client}</p>
                        </div>
                        <Badge variant={
                          project.status === 'completed' ? 'default' : 
                          project.status === 'in-progress' ? 'secondary' : 'outline'
                        }>
                          {project.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Testimonials</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { client: "Sarah Johnson", rating: 5, excerpt: "Transformed our entire digital infrastructure..." },
                      { client: "Michael Chen", rating: 5, excerpt: "Complete life optimization strategy..." },
                      { client: "Emma Rodriguez", rating: 5, excerpt: "Exceeded all expectations..." }
                    ].map((testimonial, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{testimonial.client}</p>
                          <div className="flex">
                            {Array.from({ length: testimonial.rating }).map((_, i) => (
                              <span key={i} className="text-yellow-400">★</span>
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{testimonial.excerpt}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Project Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <FolderOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Project Management Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    Full CRUD operations for projects will be implemented once Supabase integration is complete.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="testimonials" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Testimonial Management</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Testimonial
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Testimonial Management Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    Full CRUD operations for testimonials will be implemented once Supabase integration is complete.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Settings</h2>
            </div>
            
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Settings className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Settings Panel Coming Soon</h3>
                  <p className="text-muted-foreground mb-4">
                    Admin settings and configuration options will be available once backend integration is complete.
                  </p>
                  <Button variant="outline">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;