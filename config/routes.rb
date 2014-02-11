DanceEvents::Application.routes.draw do
  resources :events


  root to: "list#index"
end
