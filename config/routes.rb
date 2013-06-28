AngularProject::Application.routes.draw do

  resources :submissions do
    collection do
      get 'all_submissions', :format => :json
    end  
  end 
    
  root :to => 'submissions#index'
end
