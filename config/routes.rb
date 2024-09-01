Rails.application.routes.draw do
  # resources :job_skills

  # Namespace the routes for API versioning
  # namespace :api do
  #   namespace :v0 do
  #     resources :job_listings
  #   end
  #
  #   # namespace :v1 do
  #   #   resources :job_listings
  #   # end
  #   # match 'v:api/*path', :to => redirect("/api/v2/%{path}")
  #   # match '*path', :to => redirect("/api/v2/%{path}")
  # end

  namespace :api do
    namespace :v0 do
      resources :job_listings, only: [:index, :show]
    end
  end

  # Define the custom route for health check
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "job_listings#index"
end
