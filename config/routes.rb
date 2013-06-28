AngularProject::Application.routes.draw do

  resources :submissions, :only => [:index] do
    collection do
      get 'all_submissions', :format => :json
    end  
    member do
      post 'create', :format => :json
    end  
  end 
    
  root :to => 'submissions#index'
end
